'use server';
/**
 * @fileOverview An AI assistant flow for ADVENTIZER that suggests relevant keywords, questions, and brand energy integrations.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiContactFormAssistantInputSchema = z.object({
  subject: z
    .string()
    .optional()
    .describe('The current subject entered by the user in the contact form.'),
  currentMessage: z
    .string()
    .describe('The current message content entered by the user in the contact form.'),
});
export type AiContactFormAssistantInput = z.infer<
  typeof AiContactFormAssistantInputSchema
>;

const AiContactFormAssistantOutputSchema = z.object({
  suggestedKeywords: z
    .array(z.string())
    .describe('A list of high-energy keywords to energize the brand communication.'),
  suggestedQuestions: z
    .array(z.string())
    .describe('A list of clarifying questions for the user to consider regarding their event vision.'),
  suggestedServices: z
    .array(z.string())
    .describe(
      'A list of relevant services from ADVENTIZER that match the inquiry.'
    ),
});
export type AiContactFormAssistantOutput = z.infer<
  typeof AiContactFormAssistantOutputSchema
>;

export async function aiContactFormAssistant(
  input: AiContactFormAssistantInput
): Promise<AiContactFormAssistantOutput> {
  return aiContactFormAssistantFlow(input);
}

const contactFormAssistantPrompt = ai.definePrompt({
  name: 'contactFormAssistantPrompt',
  input: {schema: AiContactFormAssistantInputSchema},
  output: {schema: AiContactFormAssistantOutputSchema},
  prompt: `You are an AI assistant for a creative event agency named ADVENTIZER. Your slogan is "Adventizer, energize your brand communication." Your goal is to help potential clients clearly articulate their project needs by suggesting relevant keywords, questions, and service integrations.

The services offered by ADVENTIZER are:
- Brand Activation (keywords: experiential marketing, brand identity, immersive engagement, product launches)
- Live Production (keywords: stage design, event technology, concert visuals, opening ceremonies)
- Digital Strategy (keywords: interactive installations, AI-powered experiences, VR/AR, motion tracking)
- Creative Content (keywords: motion graphics, CGI, storytelling, high-energy visuals)

Based on the user's current input, provide:
1.  A list of up to 5 high-energy keywords they might want to include in their message.
2.  A list of up to 3 clarifying questions they might want to consider to better describe their project goals.
3.  A list of up to 2 services from the provided list that are most relevant to their inquiry.

Current Subject: {{{subject}}}
Current Message: {{{currentMessage}}}`,
});

const aiContactFormAssistantFlow = ai.defineFlow(
  {
    name: 'aiContactFormAssistantFlow',
    inputSchema: AiContactFormAssistantInputSchema,
    outputSchema: AiContactFormAssistantOutputSchema,
  },
  async input => {
    const {output} = await contactFormAssistantPrompt(input);
    return output!;
  }
);