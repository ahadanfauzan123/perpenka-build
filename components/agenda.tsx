// import { useState, useEffect } from 'react';
// import { db } from '../firebase';
// import { collection, getDocs, DocumentData, QuerySnapshot } from 'firebase/firestore';
// import { Calendar } from 'react-calendar'; // Import View
// import 'react-calendar/dist/Calendar.css';

// interface AgendaData {
//   id: string;
//   data: {
//     name: string;
//     description: string;
//     startDate: string;
//     DueDate: string;
//   };
// }

// function Agenda() {
//   const [agendas, setAgendas] = useState<AgendaData[]>([]);
//   const [selectedDate, setSelectedDate] = useState<Date | Date[] | null>(new Date()); // Set initial value to a new Date()

//   useEffect(() => {
//     const fetchAgendas = async () => {
//       try {
//         const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'agenda'));
//         const agendaData: AgendaData[] = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           data: doc.data() as AgendaData['data'],
//         }));
//         setAgendas(agendaData);
//       } catch (error) {
//         console.error('Error fetching agendas:', error);
//       }
//     };
  
//     fetchAgendas();
//   }, []);
  
//   const handleDateChange = (date: Date | Date[] | null): void => { // Remove MouseEvent
//     if (date instanceof Date || Array.isArray(date)) {
//       setSelectedDate(date);
//     }
//   };

//   return (
//     <div className="w-[80vw] mx-auto flex flex-col space-y-10 items-center">
//       <h1 className="text-4xl font-extrabold text-gray-50">AGENDA</h1>
//       <div className="flex items-start justify-center space-x-8 w-full">
//         <Calendar 
//           className={`flex-[0.4] text-gray-50 h-[400px] rounded-lg shadow-lg`} 
//           onChange={handleDateChange} 
//           value={selectedDate as Date | Date[]} // Cast selectedDate to Date | Date[]
         
//         />
//         <div className="flex-[0.55] flex flex-col space-y-8">
//           {selectedDate && !Array.isArray(selectedDate) && (
//             <div>
//               <h2>Agenda for {selectedDate.toLocaleDateString()}</h2>
//               {agendas
//                 .filter(agenda => new Date(agenda.data.startDate).toLocaleDateString() === (selectedDate as Date).toLocaleDateString()) // Cast selectedDate to Date
//                 .map(agenda => (
//                   <div key={agenda.id}>
//                     <h3>{agenda.data.name}</h3>
//                     <p>{agenda.data.description}</p>
//                     <p>Start Date: {agenda.data.startDate}</p>
//                     <p>Due Date: {agenda.data.DueDate}</p>
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Agenda;
