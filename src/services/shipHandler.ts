import api from './api'
import ship from '../models/ship/Ship'

export default await api.RetrieveData<typeof ship>(import.meta.env.VITE_API_SHIPS_ENDPOINT)