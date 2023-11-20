import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {request} from '../../util/fetchAPI'
import { arrPriceRanges } from '../../util/idxToPriceRange'
import { continentToIdx } from '../../util/idxToContinent'
import '../css/properties.css';

const Properties = () => {
    const [allProperties, setAllProperties] = useState([])
    const [filteredProperties, setFilteredProperties] = useState([])
    const [state, setState] = useState(null)
    const query = (useLocation().search).slice(1) //slice(1) to get rid of the "?"
    const arrQuery = query.split("&")
    const navigate = useNavigate()

    // console.log(useLocation().search.slice(1).split('&'))

    //fetch all properties
    useEffect(() => { 
        const fetchAllProperties = async() => {
            const data = await request("/property/getAll", 'GET')
            setAllProperties(data)
        }
        fetchAllProperties()
    }, [])

    //parsing query params
    useEffect(() => {
        if (arrQuery && allProperties?.length > 0 && state === null){
            let formattedQuery = {}
            arrQuery.forEach((option, idx) => {
                console.log(option)
                const key = option.split("=")[0]
                const value = option.split("=")[1]
                formattedQuery = {...formattedQuery, [key]: value}
                //if we are in the last index, then assign the formattedQuery object to state
                if (idx === arrQuery.length - 1){
                    setState(formattedQuery)
                    handleSearch(formattedQuery)
                }
            })
        }
    }, [allProperties, arrQuery])

    const handleSearch = (param = state) => {
        let options
        //we either pass the formattedObj or event, thats why we use if else
        if (param?.nativeEvent){
            options = state 
        } else{
            options = param 
        }
        const filteredProperties = allProperties.filter((property) => {
            const priceRange = arrPriceRanges[options.priceRange]
            const minPrice = Number(priceRange.split('-')[0])
            const maxPrice = Number(priceRange.split('-')[1])
            const continent = continentToIdx(property.continent)
            console.log(continent)
        })
    }
    return (
        <div>Properties</div>
    )
} 

export default Properties