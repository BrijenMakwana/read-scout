import {useQuery} from '@tanstack/react-query';
import {GoogleGenerativeAI} from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('');

const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});

const useAI = (prompt: string) => {
  const generateContent = async (): Promise<string> => {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  };

  return useQuery({
    queryKey: [prompt],
    queryFn: generateContent,
    enabled: false,
  });
};

export default useAI;
