export default function QuoteCard() {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-red-600 text-2xl font-semibold text-center mb-4">Reflection</h2>
            <h3 className="text-xl font-bold text-center mb-6">HOW TO DESTROY A COUNTRY</h3>
            <p className="text-gray-600 italic mb-4">
              At the entrance gate of a university in South Africa, the following message was posted for contemplation:
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 mb-6">
              <p className="text-gray-800 mb-4">
                &quot;Destroying any nation does not require the use of atomic bombs or the use of long range missiles...
                It only requires lowering the quality of education and allowing cheating in the examinations by the
                students...&quot;
              </p>
              <div className="space-y-2 text-gray-700">
                <p>Patients die at the hands of such doctors...</p>
                <p>Buildings collapse at the hands of such engineers...</p>
                <p>Money is lost at the hands of such economists & accountants...</p>
                <p>Humanity dies at the hands of such religious scholars...</p>
                <p>Justice is lost at the hands of such judges...</p>
              </div>
            </blockquote>
            <p className="text-center font-bold text-gray-900">
              &quot;The collapse of education is the collapse of the nation.&quot;
            </p>
            <p className="text-sm text-gray-600 italic text-center mt-6">
              Kiptenden intends to live to great expectation of transformation
            </p>
          </div>
        </div>
      </div>
    )
  }  