import './Feedback.css';

/**
 * Componente visual de Feedback
 * 
 * Lógica: Você controla as props 'message', 'type', 'isVisible' e a função 'onClose'
 * no seu hook global (useFeedback ou similar).
 * 
 * @param {Object} props
 * @param {string} props.message - A mensagem que aparecerá no toast
 * @param {'success' | 'error'} props.type - 'success' (verde) ou 'error' (vermelho)
 * @param {boolean} props.isVisible - Controla se o toast deve aparecer
 * @param {Function} props.onClose - Função para fechar o toast (você injeta a lógica)
 */
export function Feedback({ message = "Operação realizada com sucesso", type = "success", isVisible = true, onClose }) {
  if (!isVisible) return null;

  return (
    <div className={`feedback-toast feedback-${type}`}>
      <div className="feedback-icon">
        {type === 'success' ? (
          // Ícone de sucesso (Check)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          // Ícone de erro (X)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>
      
      <div className="feedback-content">
        <p className="feedback-message">{message}</p>
      </div>

      <button className="feedback-close" onClick={onClose} aria-label="Fechar" title="Fechar">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
