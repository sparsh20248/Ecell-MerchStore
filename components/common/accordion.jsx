import * as React from "react";
import { useState } from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import AddIcon from "@mui/icons-material/Add";

import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/solid";

const Accrd = (props) => {
    const [expanded, setExpanded] = useState(false);
    // return (
    //     <div>
    //         <Accordion
    //             onClick={() => {
    //                 setExpanded(!expanded);
    //             }}
    //             className={
    //                 expanded
    //                     ? "rounded-none bg-gradient-to-r from-purple-500 to-indigo-500 text-stone-50 border-2 border-purple-300 w-[430px]"
    //                     : "rounded-none bg-transparent text-stone-50 border-2 border-purple-300 w-[430px]"
    //             }
    //         >
    //             <AccordionSummary
    //                 expandIcon={
    //                     <div>
    //                         <AddIcon color="secondary" />
    //                     </div>
    //                 }
    //             >
    //                 <Typography>{props.title}</Typography>
    //             </AccordionSummary>
    //             <AccordionDetails>
    //                 <Typography>{props.body}</Typography>
    //             </AccordionDetails>
    //         </Accordion>
    //     </div>
    // );

    return (
        <div>
            <div
                className={
                    expanded
                        ? "rounded-none bg-gradient-to-r from-purple-500 to-indigo-500 text-stone-50 border-2 border-purple-300 w-[430px]"
                        : "rounded-none bg-transparent text-stone-50 border-[4px] border-zinc-800 w-[430px]"
                }

                //  className="mx-auto w-full max-w-md rounded-2xl bg-white p-2"
            >
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full justify-between rounded-lg px-4 py-3 text-left text-sm font-medium "
                                onClick={() => {
                                    setExpanded(!expanded);
                                }}
                            >
                                <span>{props.title}</span>
                                <PlusIcon
                                    className={`${
                                        open ? "rotate-45 transform" : ""
                                    } h-5 w-5 text-stone`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-stone">
                                {props.body}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default Accrd;
