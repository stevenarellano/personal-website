import { useEffect, useState } from 'react';

export function useToggleModal() {
	const [active, setActive] = useState(false);
	function toggleModal() {
		
		setActive(!active);
	}

	useEffect(() => {
		if (active) {
			document.body.style.overflow = 'hidden';
		}
		if (!active) {
			document.body.style.overflow = 'unset';
		}
	}, [active]);

	return { active, toggleModal };
}
