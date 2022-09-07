import './rightside.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'

export default function RightSide() {
    return (
        <div className="RightSide">
            <div className="">
                <h3>Updates</h3>
                <Updates />
            </div>
            <div className="">
                <h3>Customer Review</h3>
                <CustomerReview />
            </div>
        </div>
    )
}