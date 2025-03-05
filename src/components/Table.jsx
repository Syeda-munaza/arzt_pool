import "../pages/Section.css";
const Table = () => {
    const servicesData = [
        {
          serviceType: "driving service",
          customer: "Mr. Khizar Abbas",
          customerNumber: "169000",
          startDate: "2024-08-30 - 11:00",
          endDate: "2024-08-30 - 17:00",
          serviceArea: "Berlin - Service Area",
          federalState: "Berlin",
          status: "Not sure",
        },
        {
          serviceType: "driving service",
          customer: "Mr. Khizar Abbas",
          customerNumber: "169000",
          startDate: "2024-08-30 - 12:00",
          endDate: "2024-08-30 - 18:00",
          serviceArea: "Peshawar Service Area K Comments",
          federalState: "Berlin",
          status: "Not sure",
        },
        {
          serviceType: "driving service",
          customer: "Mr. Khizar Abbas",
          customerNumber: "169000",
          startDate: "2024-08-30 - 20:00",
          endDate: "2024-08-31 - 01:30",
          serviceArea: "Berlin - Service Area",
          federalState: "Berlin",
          status: "Not sure",
        },
      ];
  return <>
  
  <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>type of service</th>
              <th>could</th>
              <th>customer number</th>
              <th>start of Service</th>
              <th> Service</th>
              <th>Service Area</th>
              <th>Federal State</th>
              <th>Status</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service, index) => (
              <tr key={index}>
                <td>{service.serviceType}</td>
                <td>{service.customer}</td>
                <td>{service.customerNumber}</td>
                <td>{service.startDate}</td>
                <td>{service.endDate}</td>
                <td>{service.serviceArea}</td>
                <td>{service.federalState}</td>
                <td>{service.status}</td>
                <td>
                  <button className="search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.7rem"
                      height="1rem"
                      border-radius="1px solid"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        stroke="none"
                        d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </>;
};
export default Table;