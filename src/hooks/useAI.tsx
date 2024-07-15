import {useQuery} from '@tanstack/react-query';
import {GoogleGenerativeAI} from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});

const useAI = (prompt: string) => {
  const generateContent = async (): Promise<string> => {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  };

  const {data, ...rest} = useQuery({
    queryKey: ['summary'],
    queryFn: generateContent,
    enabled: false,
  });

  return {
    summary: data,
    ...rest,
  };
};

export default useAI;