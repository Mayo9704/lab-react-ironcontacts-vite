// function contactsList () {
//     const [contactsList, setContactsList] = useState(contacts.slice(0, 5));

//     return (
//     <div>
//         <table>
//             <thead>
//             <tr>
//                 <th>Picture</th>
//                 <th>Name</th>
//                 <th>Popularity</th>
//                 <th>Won an Oscar</th>
//                 <th>Won an Emmy</th>
//             </tr>
//             </thead>
//             <tbody>
//             {contactsList.map((contact) => (
//                 <tr key={contact.id}>
//                 <td><img src={contact.pictureUrl} alt={contact.name} style={{width: "50px"}}/></td>
//                 <td>{contact.name}</td>
//                 <td>{contact.popularity.toFixed(2)}</td>
//                 <td>{contact.wonOscar ? "🏆" : ""}</td>
//                 <td>{contact.wonEmmy ? "🌟" : ""}</td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//     </div>
//     );

// }

// export default contactsList
