import { useState } from "react"
import { Form } from "@obelix/form"

/*
  CreatedDate, Type, Key, ID
*/

const schema = {
	make: { label: "Make", type: "text" },
	colour: { label: "Colour", type: "text" },
	doors: { label: "Doors", type: "text" },
	reg: { label: "Registration", type: "text" },
	year: { label: "Year", type: "text" },
}

const Accounts = () => {
	return <Form schema={schema} />
}

export default Accounts
