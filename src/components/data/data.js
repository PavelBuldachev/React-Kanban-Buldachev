const LIST_TYPES = {
	BACKLOG: 0,
    READY: 1,
	IN_PROGRESS: 2,
	FINISHED: 3,
}

const LIST_COPY = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
    [LIST_TYPES.READY]: "Ready",
	[LIST_TYPES.IN_PROGRESS]: 'In progress',
	[LIST_TYPES.FINISHED]: 'Finished',
}



export { LIST_TYPES, LIST_COPY }