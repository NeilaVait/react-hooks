import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  useEffect(() => {
    console.log('useEffect()');
    document.title = title;
  });
}
