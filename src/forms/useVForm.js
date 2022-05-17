import { useCallback, useRef } from 'react';

const useVForm = () => {
	const formRef = useRef(null);

	const isSaveAndNew = useRef(false);
	const isSaveAndClose = useRef(false);

	const handleSave = useCallback(() => {
		isSaveAndNew.current = false;
		isSaveAndClose.current = false;
		formRef.current?.submitForm();
	}, []);

	const handleSaveAndNew = useCallback(() => {
		isSaveAndNew.current = true;
		isSaveAndClose.current = false;
		formRef.current?.submitForm();
	}, []);

	const handleSaveAndClose = useCallback(() => {
		isSaveAndNew.current = false;
		isSaveAndClose.current = true;
		formRef.current?.submitForm();
	}, []);

	const handleIsSaveAndNew = useCallback(() => {
		return isSaveAndNew.current;
	}, []);

	const handleIsSaveAndClose = useCallback(() => {
		return isSaveAndClose.current;
	}, []);

	return {
		formRef,
		save: handleSave,
		saveAndNew: handleSaveAndNew,
		saveAndClose: handleSaveAndClose,
		isSaveAndNew: handleIsSaveAndNew,
		isSaveAndClose: handleIsSaveAndClose,
	};
};

export { useVForm };
