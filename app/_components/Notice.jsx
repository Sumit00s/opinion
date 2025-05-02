export default function Notice(){
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
  <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-lg w-11/12 max-w-lg mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
    <span role="img" aria-label="warning" className="text-3xl">⚠️</span>
    <div className="text-center md:text-left">
      <p className="font-semibold text-lg md:text-xl">Important Update:</p>
      <p className="text-sm md:text-base">
        Due to ethical considerations, the <strong>Opinion Site</strong> is no longer accepting new submissions or interactions. The site was designed to promote anonymous feedback, but to ensure the safety and well-being of all users, I have decided to temporarily disable service. Thank you for your understanding.
      </p>
    </div>
    
  </div>
</div>

    )
}