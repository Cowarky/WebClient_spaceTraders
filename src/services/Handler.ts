import api from "./api";
import IAgent from '../models/Agent'
import IShip from "../models/ship/Ship";
import IContract from '../models/Contract'

const ship = await api.RetrieveData<typeof IShip>(import.meta.env.VITE_API_SHIPS_ENDPOINT)
const agent = await api.RetrieveData<typeof IAgent>(import.meta.env.VITE_API_AGENT_ENDPOINT)
const contract = await api.RetrieveData<typeof IContract>(import.meta.env.VITE_API_CONTRACTS_ENDPOINT)

export default {ship, agent, contract}
