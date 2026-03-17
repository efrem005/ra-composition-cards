export interface CardData {
	id: number
	image?: string
	title: string
	text?: string
	button?: { text: string; href?: string; variant?: string }
}