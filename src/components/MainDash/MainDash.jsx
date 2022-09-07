import './maindash.css'
import Cards from '../Cards/Cards'
import BasicTable from '../Table/Table'

export default function MainDash() {
    return (
        <div className="MainDash">
            <h1>Dashboard</h1>
            <Cards />
            <BasicTable />
        </div>
    )
}