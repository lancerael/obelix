import { useState } from "react"
import Button from "@obelix/button"
import { TextInput } from "@obelix/text-input"

/*
  Make, Colour, Year, Doors, Reg
*/

const Cars = () => {
	const [cars, setCars] = useState({
		make: "",
		colour: "",
		doors: "",
		reg: "",
		year: "",
	})

	const handleChange = (e) => {
		setCars((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
	}

	const carsArray = ["make", "colour", "year", "doors", "reg"]

	return (
		<div>
			<div>
				<form>
					{carsArray.map((item) => {
						const labelTransformed = item[0].toUpperCase() + item.slice(1)
						return (
							<TextInput label={labelTransformed} key={item} name={item} onChange={handleChange} value={cars[item]} />
						)
					})}
				</form>
			</div>
			-
			<Button
				onClick={(e) => {
					e.preventDefault()
					console.log(cars)
				}}
			>
				Submit form
			</Button>
		</div>
	)
}
