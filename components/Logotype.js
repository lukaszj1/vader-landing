import React from 'react'
import Link from 'next/link'
import { Flex, Image, useBreakpointValue } from '@chakra-ui/react'

export const Logotype = (props) => {

	const width = useBreakpointValue({
		base: '126.31px',
		md: '156.31px',
	})

	return (
		<Flex {...props}>
			<Link href='/'>
				<a style={{ alignSelf: 'center' }}>
					<Image
						style={{ maxWidth: width }}
						src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='830.23' height='145.72' viewBox='0 0 561.7 96'%3E%3Cdefs/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='148.9' x2='148.9' y2='96' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.4' stop-color='%2326a4fe'/%3E%3Cstop offset='1' stop-color='%2338e9fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='71.2' x2='71.2' xlink:href='%23a'/%3E%3ClinearGradient id='d' x1='256.9' x2='256.9' xlink:href='%23a'/%3E%3ClinearGradient id='e' x1='356.4' x2='356.4' xlink:href='%23a'/%3E%3ClinearGradient id='f' x1='457.3' x2='457.3' xlink:href='%23a'/%3E%3ClinearGradient id='b' x1='139.9' x2='139.9' y1='96' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.3' stop-color='%23ff9ddb'/%3E%3Cstop offset='1' stop-color='%23ffc8ff'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' x1='62.4' x2='62.4' xlink:href='%23b'/%3E%3ClinearGradient id='h' x1='247.9' x2='247.9' xlink:href='%23b'/%3E%3ClinearGradient id='i' x1='347.4' x2='347.4' xlink:href='%23b'/%3E%3ClinearGradient id='j' x1='448.3' x2='448.3' xlink:href='%23b'/%3E%3C/defs%3E%3Cg data-name='Layer 2'%3E%3Cg data-name='Layer 1'%3E%3Cpath fill='url(%23a)' d='M150.7 0l-47.8 96H126l8.9-19h39v19h21V0zm23.2 57H145l16.3-35h12.5z'/%3E%3Cpath fill='url(%23c)' d='M41 0H8.7l5 10h31.8zm62.3 0L74.6 60.5 72 66h-.5l-9.3-19.4-4.6-9.6H27.7l4.7 9.5L57 96h29l47.5-96zM52.7 28l-4.4-9H19.7l4.4 9z'/%3E%3Cpath fill='url(%23d)' d='M291.2 11.3Q301 22.6 301 48t-9.7 36.8Q281.5 96 261.7 96h-48.8V0h48.8q19.8 0 29.5 11.3zM235 24v49H256q10 0 15-5.8t5-18.7q0-13-5-18.7T256 24z'/%3E%3Cpath fill='url(%23e)' d='M339.9 37h51v20h-50v17h54v22h-77V0h75v22h-53z'/%3E%3Cpath fill='url(%23f)' d='M501.7 96h-26l-13.5-31h-27.3v31h-22V0h59.6q14.5 0 21 7.8t6.5 23.8q0 12.2-4 18.5a20.4 20.4 0 01-11.1 8.7v1zm-29.6-54.4q1.9-2.3 1.9-7.2t-1.9-7.1c-1.2-1.5-3.3-2.3-6.1-2.3h-31.1v19H466q4.3 0 6.1-2.4z'/%3E%3Cpath fill='url(%23b)' d='M141.7 0L93.9 96H117l8.9-19h39v19h21V0zm23.2 57H136l16.3-35h12.5z'/%3E%3Cpath fill='url(%23g)' d='M32.2 0H0l5 10h31.9zm62.4 0L65.8 60.5 63.2 66h-.5l-9.2-19.4-4.6-9.6H19l4.7 9.5L48.2 96h29l47.6-96zM43.9 28l-4.3-9H10.8l4.5 9z'/%3E%3Cpath fill='url(%23h)' d='M282.2 11.3Q292 22.6 292 48t-9.7 36.8Q272.5 96 252.7 96h-48.8V0h48.8q19.8 0 29.5 11.3zM226 24v49H247q10 0 15-5.8t5-18.7q0-13-5-18.7T247 24z'/%3E%3Cpath fill='url(%23i)' d='M331.9 37h51v20h-51v17h54v22h-77V0h76v22h-53z'/%3E%3Cpath fill='url(%23j)' d='M492.7 96h-25l-13.5-31h-27.3v31h-23V0h59.6q14.5 0 21 7.8t6.5 23.8q0 12.2-4 18.5a20.4 20.4 0 01-11.1 8.7v1zm-28.6-54.4q1.9-2.3 1.9-7.2t-1.9-7.1c-1.2-1.5-3.3-2.3-6.1-2.3h-31.1v19H458q4.3 0 6.1-2.4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"
					/>
				</a>
			</Link>
		</Flex>
	)
}
