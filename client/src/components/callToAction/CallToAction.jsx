// // import React from 'react'
// import TextField from "@mui/material/TextField";
// import ctaImg from "../../assets/images/cta.png";
// export default function CallToAction() {
//   return (
//     <div className="pt-6 pb-10 lg:pb-20 font-bodyFont text-darkSecondary bg-lightPrimary  ">
//       <div className="w-full flex flex-row gap-5 bg-darkPrimary pt-5">
//         <div className="uppercase flex flex-col gap-5 py-10 px-10 justify-center">
//           <div className="flex flex-col gap-1 font-titleFont">
//             <div className="text-lightPrimary text-5xl">
//               Ready to <span className="font-extralight">Transform</span>
//             </div>
//             <div className="text-7xl text-lightPrimary font-bold">
//               Your <span className="text-accentColor">Business</span>?
//             </div>
//           </div>
//           <div className="flex flex-row">
//             <TextField
//               id="outlined-basic"
//               label="Enter Email Address"
//               variant="outlined"
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   borderRadius: 0,
//                   "& fieldset": {
//                     borderColor: "#ffffff", // Border color
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#c8f31d", // Border color on hover
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#c8f31d", // Border color when focused
//                   },
//                 },
//                 input: {
//                   color: "#ffffff", // Text color
//                 },
//                 "& .MuiInputLabel-root": {
//                   color: "#B0C4DE", // Label color
//                 },
//                 "& .MuiInputLabel-root.Mui-focused": {
//                   color: "#FFFFFF", // Label color when focused
//                 },
//                 width: "35ch",
//               }}
//             />
//             <button className="flex justify-center items-center hover:bg-accentColor hover:text-darkPrimary hover:scale-[1.1] duration-500 rounded-sm bg-lightPrimary">
//               <div className="w-full uppercase px-3 py-2  text-lg text-center">
//                 Get Started
//               </div>
//             </button>
//           </div>
//         </div>
//         <div className="w-[30%] flex justify-end">
//           <div className="w-full aspect-square">
//             <img className="w-full h-full" src={ctaImg} alt="call_to_action" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
