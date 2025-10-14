import { Check, X, Crown, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const comparisonData = {
  headers: [
    { name: 'BASIC', subtitle: 'GHC 100', icon: Sparkles, color: 'text-purple-600' },
    { name: 'PREMIUM', subtitle: 'GHC 500', icon: Star, color: 'text-pink-600', popular: true },
    { name: 'VIP', subtitle: 'GHC 1,500', icon: Crown, color: 'text-orange-600' },
  ],
  rows: [
    { feature: 'Outfit Combinations', values: ['15-20', '40-50', '60-80'] },
    { feature: 'Occasion Categories', values: ['2', '4', '7+'] },
    { feature: 'Lookbook Pages', values: ['20-30', '50+', '80-100'] },
    { feature: 'Delivery Time', values: ['48 hours', '24 hours', '12 hours'] },
    { feature: 'Color Analysis', values: ['Basic', 'Personalized', 'Professional'] },
    { feature: 'Shopping Guide', values: [false, true, 'Premium'] },
    { feature: 'Video Consultation', values: [false, false, '30 min'] },
    { feature: 'WhatsApp Support', values: ['Email only', '1 month', '3 months'] },
    { feature: 'Lookbook Updates', values: [false, '20% off', 'Free (6 mo)'] },
    { feature: 'VIP Group Access', values: [false, false, true] },
    { feature: 'Body Type Analysis', values: [false, true, true] },
    { feature: 'Accessory Pairing', values: [false, true, true] },
    { feature: 'Hair & Makeup Ideas', values: [false, false, true] },
    { feature: 'Wardrobe Audit Checklist', values: [false, false, true] },
  ],
};

const CompareTable = () => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Side-by-Side Comparison</h2>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Find the perfect style solution to meet your needs and budget.</p>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr>
              <th className="text-left py-6 px-4 font-semibold text-gray-700 w-1/4">Features</th>
              {comparisonData.headers.map((header, idx) => (
                <th key={idx} className={`text-center py-6 px-4 w-1/4 relative ${header.popular ? 'bg-pink-50 rounded-t-2xl' : ''}`}>
                  {header.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>}
                  <div className={`flex items-center justify-center gap-2 ${header.color}`}>
                    <header.icon className="w-6 h-6" />
                    <span className="font-bold text-xl">{header.name}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{header.subtitle}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData.rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="border-t border-gray-100">
                <td className="py-5 px-4 font-medium text-gray-800">{row.feature}</td>
                {row.values.map((value, valIdx) => (
                  <td key={valIdx} className={`py-5 px-4 text-center ${comparisonData.headers[valIdx].popular ? 'bg-pink-50' : ''}`}>
                    {typeof value === 'boolean' ? (
                      value ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-gray-900 font-semibold">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-gray-200">
              <td></td>
              <td className="text-center py-8 px-4">
                <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full">
                  <a href="https://selar.com/8889217w19">Choose Basic</a>
                </Button>
              </td>
              <td className="text-center py-8 px-4 bg-pink-50 rounded-b-2xl">
                <Button asChild className="bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg">
                  <a href="https://selar.com/5w0975u30d">Choose Premium</a>
                </Button>
              </td>
              <td className="text-center py-8 px-4">
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full">
                  <a href="https://selar.com/152914f998">Choose VIP</a>
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CompareTable;
