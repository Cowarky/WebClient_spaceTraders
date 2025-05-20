import api from './api'
import IAgent from '../models/Agent'

export default await api.RetrieveData<typeof IAgent>(import.meta.env.VITE_API_AGENT_ENDPOINT)