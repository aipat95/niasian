import "./card.css";


export default function Suggest() {
    return (
        <div className="suggestions-container">
            <h3>Suggestions</h3>
            <ul>
                <li>Reorder items that are out of stock.</li>
                <li>Increase stock of high-demand items.</li>
                <li>Consider promotional discounts for slow-moving items.</li>
            </ul>
        </div>
    );
}
