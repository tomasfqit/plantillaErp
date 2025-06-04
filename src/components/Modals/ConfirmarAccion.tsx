"use client"

import Modal from "./Modal"

interface ModalConfirmarAccionProps {
	isOpen: boolean
	onClose: () => void,
	title: string,
	description: string,
	confirmAction: () => void,
}

export function ModalConfirmarAccion({ isOpen, onClose, title, description, confirmAction }: ModalConfirmarAccionProps) {

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={title}
			size="sm"
			footer={
				<>
					<button
						onClick={onClose}
						className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
					>
						Cancelar
					</button>
					<button
						onClick={() => {
							confirmAction()
							onClose()
						}}
						className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
					>
						Confirmar
					</button>
				</>
			}
		>
			<p className="text-gray-600">
				{description}
			</p>
		</Modal>
	)
}
