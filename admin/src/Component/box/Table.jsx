
function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}

const rows = [
    createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
    createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
    createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
    createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];


const makeStyle = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

export default function Basictable() {
    return (
        <div className="table">
            <h3>Recent Orders</h3>
            <table
                className="table-bordered"
                style={{ boxShadow: "10px 13px 20px 0px #80808029" }}
            >
                <table  aria-label="simple table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th align="left">Tracking ID</th>
                            <th align="left">Date</th>
                            <th align="left">Status</th>
                            <th align="left"></th>
                        </tr>
                    </thead>
                    <tbody style={{ color: "gray" }}>
                        {rows.map((row) => (
                            <tr
                                key={row.name}
                            >
                                <th scope="row">
                                    {row.name}
                                </th>
                                <th align="left">{row.trackingId}</th>
                                <th align="left">{row.date}</th>
                                <th align="left">
                                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                                </th>
                                <th align="left" className="Details">Details</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </table>
        </div>
    );
}