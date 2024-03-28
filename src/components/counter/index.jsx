import { useDispatch, useSelector } from 'react-redux'
import { getCounterByOneSelector } from '../../store/selectors'

import View from './view'
import { useEffect, useState } from 'react'
import { counterApi } from '../../utils/apis/counter'
import { intialize } from '../../store/actions-creators/counter'

export const Counter = () => {

    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const f = async () => {
            try {
                setLoading(true)
                const res = await counterApi.getValue()
                dispatch(intialize(res.data.value))
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        f()
    }, [])

    const counterValueSelect = useSelector(getCounterByOneSelector)

    return (
        <View {...{ counterValueSelect, isLoading, error }} />
    )
}