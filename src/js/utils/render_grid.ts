import { curry } from 'ramda'

import get_dimensions from './get_dimensions'
import observe_resize from './observe_resize'
import { t_create_grid, t_resize_ele, t_void_func } from "../types/index"

const create_grid: t_create_grid = (client_height, client_width) => {
	const grid_ele = window.document.createElement('div')
	grid_ele.id = 'game_of_life_grid'

	grid_ele.style.height = (client_height * (8 / 10)) + 'px'
	grid_ele.style.width = client_width + 'px'

	document.body.append(grid_ele)

	return grid_ele
}

const resize_ele: t_resize_ele = (ele, height, width) => {
	ele.style.height = height * (8 / 10) + 'px'
	ele.style.width = width + 'px'
}

const curr_resize_ele = curry(resize_ele)

const render_grid: t_void_func = () => {

	const [client_height, client_width] = get_dimensions()
	const grid_ele = create_grid(client_height, client_width);

	const resize_grid = curr_resize_ele(grid_ele)

	observe_resize(resize_grid)
}

export default render_grid