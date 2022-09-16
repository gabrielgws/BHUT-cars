import { useContext } from "react";
import { CarsContext } from "./Cars/Context";
import { HelpersContext } from "./Helpers";

export const useCarsContext = () => useContext(CarsContext);
export const useHelpersContext = () => useContext(HelpersContext);