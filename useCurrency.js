import React from "react";

function useCurrency(from){
  let Result=[];
  async function getData() {
    try {
      const response = await fetch(`https://api.fastforex.io/fetch-all?from=${from}&api_key=0044f1f3c9-409fc6259b-sftuqs`, options);
      const result = await response.json();
      console.log(result);
      Result = result;
      console.log(`${result.inr}`);
    } catch (error) {
      console.error(error);
    }
  }

  getData();
  return Result;
};

export default useCurrency;
