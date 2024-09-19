// useIntersectionObserver.js
import { ref, onMounted, onUnmounted } from "vue";

export function useIntersectionObserver(callback) {
  const observeElement = ref(null);
  let observer = null;

  const startObserving = () => {
    if (observeElement.value) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback(); // Panggil fungsi callback saat elemen terlihat
          observer.disconnect(); // Berhenti mengamati setelah callback dipanggil
        }
      });
      observer.observe(observeElement.value);
    }
  };

  onMounted(() => {
    startObserving();
  });

  onUnmounted(() => {
    if (observer && observeElement.value) {
      observer.unobserve(observeElement.value); // Bersihkan observer saat komponen di-unmount
    }
  });

  return { observeElement };
}
