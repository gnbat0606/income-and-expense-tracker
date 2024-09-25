"use client";

import { Button } from "./Button";
import daisyui from "daisyui";
import { Progress } from "./Progress";
import { useState } from "react";
import axios from "axios";

export const Confirm1 = ({ continueHandler }) => {
  /// state zarlah
  const [currency, setCurrency] = useState();

  const handleSelect = (e) => {
    setCurrency(e.target.value);
  };
  const handler = async () => {
    const token = localStorage.getItem("token");
    const res = axios.post(
      "http://localhost:8000/api/user/currency",
      { currency },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    continueHandler();
  };
  return (
    <div className="flex flex-col items-center w-[384px]">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            <img src="Frame 10.png" alt="" className="w-12 h-12" />
            <h1 className="font-bold">Select base currency</h1>
          </div>
          <div className="flex flex-col items-center gap-3">
            <select
              onChange={handleSelect}
              id="countries"
              className=" h-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="MNT">MNT - Mongolian Tugrik</option>
              <option value="USD">USD - United States</option>
              <option value="USD">Dollar - Asutralian</option>
              <option value="Franc">Franc - French </option>
              <option value="Euro">Euro - Germany</option>
            </select>
            <p className="text-xs text-gray-400">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one{" "}
            </p>
          </div>
        </div>
        <Button clickHandler={handler} text={"confirm"} />
      </div>
    </div>
  );
};
