export function* idGenerator(){
	let count = 1
	while(true){
		yield count++
	}
}
