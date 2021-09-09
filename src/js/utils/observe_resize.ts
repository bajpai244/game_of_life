import { t_observe_callback } from '../types'
import get_dimensions from './get_dimensions'


const observe_resize = (cb: t_observe_callback) => {

	const html = document.querySelector('html')

	const rs = new ResizeObserver(e => {
		if (e.length == 1 && e[0]?.target == html) {
			const ele = e[0]
			const client_height = ele.contentRect.height
			const client_width = ele.contentRect.width

			cb(client_height, client_width)
		}
	})

	// using as to for HTMLElement type for html constant which by default has the type Element | undefined
	rs.observe(html as HTMLElement)
}

export default observe_resize