import api from "./api";
import IAgent from '../models/Agent'
import IShip from "../models/ship/Ship";
import IContract from '../models/Contract'
import ISystem from '../models/navigation/system/System'

const ship = await api.RetrieveData<typeof IShip>(import.meta.env.VITE_API_SHIPS_ENDPOINT)
const agent = await api.RetrieveData<typeof IAgent>(import.meta.env.VITE_API_AGENT_ENDPOINT)
const contract = await api.RetrieveData<typeof IContract>(import.meta.env.VITE_API_CONTRACTS_ENDPOINT)
const retrieveData = async (url: string, type: Object) => {
    return await api.RetrieveData<typeof type>(url)
}
const acceptContract  = async (contractId: string) => {
    let response = await api.SendData(import.meta.env.VITE_API_CONTRACTS_ENDPOINT + import.meta.env.VITE_API_ACCEPT, {
        contractId
    });
    return response;
}
const sendData = async (url: string, params: Object) => {
    let response = await api.SendData(url, params);
    return response;
}
// const negotiateContract = await api.SendData(import.meta.env.VITE_API_SHIPS_NEGOTIATE_ENDPOINT, 'shipSymbol')
const negotiateContract = async (shipSymbol: string) => {
    let response = await api.SendData(import.meta.env.VITE_API_SHIPS_ENDPOINT + import.meta.env.VITE_API_SHIPS_NEGOTIATE_ENDPOINT, {
        shipSymbol
    });
    return response;
};
const systems = await api.RetrieveData<typeof ISystem>(import.meta.env.VITE_API_SYSTEMS)

export default {ship, agent, contract, negotiateContract, systems, acceptContract, sendData, retrieveData}
