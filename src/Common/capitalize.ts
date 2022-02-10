export function capitalize(value: string): string{
	return [value.charAt(0).toUpperCase(), ...value.split('').slice(1)].join('')
}