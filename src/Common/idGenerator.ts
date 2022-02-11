export function* idGenerator(initialValue: number){
	let count = initialValue ? initialValue : 1
	while(true){
		yield count++
	}
}
