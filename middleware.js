import { NextResponse } from "next/server";

const middleware = (request) => {
  // console.log(request);
  return NextResponse.next();
};

export default middleware;
