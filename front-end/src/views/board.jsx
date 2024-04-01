// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Board, { moveCard } from "@lourenci/react-kanban";
// import "@lourenci/react-kanban/dist/styles.css";

// const board = {
//   columns: [
//     {
//       id: 1,
//       title: "Phone Screening",
//       backgroundColor: "#fff",
//       cards: [
//         {
//           id: 1,
//           title: "Card title 1",
//           description: "Card content"
//         },
//         {
//           id: 2,
//           title: "Card title 2",
//           description: "Card content"
//         },
//         {
//           id: 3,
//           title: "Card title 3",
//           description: "Card content"
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: "Initial Interview",
//       cards: [
//         {
//           id: 9,
//           title: "Card title 9",
//           description: "Card content"
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: "Technical Assessment",
//       cards: [
//         {
//           id: 10,
//           title: "Card title 10",
//           description: "Card content"
//         },
//         {
//           id: 11,
//           title: "Card title 11",
//           description: "Card content"
//         }
//       ]
//     },
//     {
//       id: 4,
//       title: "Final Interview",
//       cards: [
       
//       ]
//     },
//     {
//       id: 5,
//       title: "Onboarding",
//       cards: [
//         {
//           id: 12,
//           title: "Card title 12",
//           description: "Card content"
//         },
//         {
//           id: 13,
//           title: "Card title 13",
//           description: "Card content"
//         }
//       ]
//     }
//   ]
// };

// export function ControlledBoard() {
//   // You need to control the state yourself.
//   const [controlledBoard, setBoard] = useState(board);

//   function handleCardMove(_card, source, destination) {
//     const updatedBoard = moveCard(controlledBoard, source, destination);
//     setBoard(updatedBoard);
//   }

//   return (
//     <Board onCardDragEnd={handleCardMove} disableColumnDrag>
//       {controlledBoard}
//     </Board>
//   );
// }



// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Board, { moveCard } from "@lourenci/react-kanban";
// import "@lourenci/react-kanban/dist/styles.css";

// export function ControlledBoard({ candidates }) {
//   // Initialize the board with an empty columns array
//   const [controlledBoard, setBoard] = useState({ columns: [] });

//   // Populate the board with candidates data
//   useState(() => {
//     const columnsMap = {};

//     // Group candidates by step and create columns
//     candidates.forEach((candidate) => {
//       const { step } = candidate;

//       if (!columnsMap[step]) {
//         columnsMap[step] = {
//           id: step,
//           title: step,
//           cards: [],
//         };
//       }

//       columnsMap[step].cards.push({
//         id: candidate.id,
//         title: `${candidate.first_name} ${candidate.last_name}`,
//         description: candidate.email,
//         // You can add more candidate details here
//       });
//     });

//     // Convert columnsMap to an array of columns
//     const columns = Object.values(columnsMap);

//     // Set the board state with the populated columns
//     setBoard({ columns });
//   }, [candidates]);

//   // Function to handle card movement
//   function handleCardMove(_card, source, destination) {
//     const updatedBoard = moveCard(controlledBoard, source, destination);
//     setBoard(updatedBoard);
//   }

//   return (
//     <Board onCardDragEnd={handleCardMove} disableColumnDrag>
//       {controlledBoard}
//     </Board>
//   );
// }
import { useState, useEffect } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

export function ControlledBoard({ candidates }) {
  const [controlledBoard, setBoard] = useState({ columns: [] });
  const [count, setCount]= useState(0)
  useEffect(() => {
    const columnsMap = {};
    candidates.forEach((candidate) => {
      const { step } = candidate;
      if (!columnsMap[step]) {
        
        columnsMap[step] = {
          id: step,
          title: step,
          cards: [],
        };
      }
      columnsMap[step].cards.push({
        id: candidate.id,
        title: `${candidate.last_name} ${candidate.first_name}`,
        nom : `${candidate.last_name}`,
        prenom: `${candidate.first_name}`,
        description: candidate.email,
        phone: candidate.phone,

      });
    });
    const columns = Object.values(columnsMap);
    setBoard({ columns });
  }, [candidates]);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
    setCount(prevCount => prevCount + 1);
    console.log(count);
    console.log(_card.prenom,_card.nom);
    console.log(destination.toColumnId);
    
  }

  return (
    <Board onCardDragEnd={handleCardMove} disableColumnDrag>
      {controlledBoard}
    </Board>
  );
}
