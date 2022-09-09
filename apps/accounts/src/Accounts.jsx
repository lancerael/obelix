import { useState } from "react"
import { TextConfirm } from "@obelix/text-confirm"
import Button from "@obelix/button"

/*
  CreatedDate, Type, Key, ID
*/

const Accounts = () => {
	const [key, setKey] = useState("")
	return (
		<div>
			Key: {key}
			<div>
				<TextConfirm value={key} updateValue={(value) => setKey(value)} />
			</div>
			<Button onClick={() => {}}>Submit form</Button>
		</div>
	)
}

export default Accounts
