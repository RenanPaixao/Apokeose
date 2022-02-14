export default interface HeldItem{
	item: {
		name: string,
		url: string
	},
	version_details: {
		rarity: number,
		version: {
			name: string,
			url: string
		}
	}[]
}