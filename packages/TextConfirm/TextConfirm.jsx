import { useState } from "react"
import Button from "@obelix/button"
import { TextInput } from "@obelix/text-input"

export const TextConfirm = ({ value, updateValue }) => {
	const [textValue, setTextValue] = useState(value)
	const [message, setMessage] = useState("")
	const handleConfirm = () => {
		if (!textValue) {
			setMessage("Value missing!")
			return
		}
		if (value === textValue) {
			setMessage("Value unchanged!")
			return
		}
		updateValue(textValue)
		setMessage("")
	}
	return (
		<div>
			<TextInput value={textValue} onChange={({ target }) => setTextValue(target.value)} />
			<div>Lightness</div>
			<Button onClick={handleConfirm}>Confirm</Button>
			<br />
			{message}
		</div>
	)
}

export default TextInput
