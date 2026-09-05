import './Feedback.css';

/**
 * Componente visual de Feedback
 * 
 * Lógica: Você controla as props 'message', 'info', 'isVisible' e a função 'onClose'
 * no seu hook global (useFeedback ou similar).
 * 
 * @param {Object} props
 * @param {string} props.message - A mensagem que aparecerá no toast
 * @param {'success' | 'error'} props.info - 'success' (verde) ou 'error' (vermelho)
 */
export function Feedback({ feedback }) {


  console.log(feedback.message)

  return (
    <div className={`feedback-alert feedback-${feedback.info}`}>
      <div className="feedback-icon">
        {feedback.info === 'success' ? (
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
        <p className="feedback-message">{feedback.message}</p>
      </div>
    </div>
  );
}
