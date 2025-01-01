from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser 
import os
from dotenv import load_dotenv 
import ast


class LLM():
    def __init__(self):
        load_dotenv()
        os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")
        os.environ["LANGCHAIN_TRACKING_V2"] = "true"
        os.environ["LANGCHAIN_API_KEY"] = os.getenv("LANGCHAIN_API_KEY")
        # self._llm = ChatOpenAI(model="gpt-3.5-turbo")
        

    @staticmethod
    def format_to_dict(content):
        try:
            formatted_content = content.replace("'", "\"")
            return ast.literal_eval(formatted_content)
        except (SyntaxError, ValueError) as e:
            raise ValueError(f"Failed to convert content to dictionary: {e}")


    def __call__(self, words):
        # prompt = ChatPromptTemplate.from_messages(
        #     [
        #         ("system", """I will provide you some german words and I want you to give me 
        #          the english translation, 
        #          a description of the meaning in German language
        #          two simple B1 level example sentences. 
        #          Also for nouns I want the article ass well.
        #          if there is ss or ae or ue or oe modify them to ä, ö, and ü accordingly and set it as the corrected_original_word
        #          Also if there is spelling mistake in corrected_original_word correct it.
        #          your output should be a list containing a dictionary for each word with the following keys
        #          'corrected_original_word','english_translation', 'german_description', 'examples', 'article'. 
        #          If the word is not noun the value for article must be None"""),
        #         ("user", "Words: {words}")
        #     ]
        # )

        # chain = prompt|self._llm
        # res = chain.invoke({"words": words})

        # dict_output = LLM.format_to_dict(res.content)
        dict_output = [{'corrected_original_word': 'Wasser', 'english_translation': 'water', 'german_description': 'eine klare, farblose, geschmacklose Flüssigkeit, die in Flüssen, Seen, Meeren und als Regen fällt', 'examples': ['Ich trinke jeden Tag zwei Liter Wasser.', 'Das Wasser im See ist sehr kalt.'], 'article': 'das'}, {'corrected_original_word': 'Bücher', 'english_translation': 'books', 'german_description': 'gedruckte oder in anderer Weise vervielfältigte Schriftstücke, die Informationen, Geschichten oder Bilder enthalten', 'examples': ['Ich lese gerne Bücher in meiner Freizeit.', 'In der Bibliothek gibt es viele interessante Bücher.'], 'article': 'die'}]
        
        return dict_output