'''
Script para fazer parsing do repositório openspiel e extrair informações como path, nome e dependencias e escreve-las
em um arquivo json
'''

import os
import json 
import re

def dir_parsing(diretorio): #retorna os dados do diretório em forma de lista de "file_data"
    tam = len(diretorio) - 10
    dir_data = []
    for root, dirs, files in os.walk(diretorio):
        for file in files:
            if file.endswith('.py') or file.endswith('.cc') or file.endswith('.cpp') or file.endswith('.h'): # Só analisa códigos c++ ou python
                file_path = os.path.join(root, file).replace("\\", "/")
                file_path_rel = file_path[tam:].replace("\\", "/")
                file_data = { #informações que vamos extrair dos arquivos
                    'path' : file_path_rel,
                    'nome' : file,
                    'dependencias' : []
                }

                with open(file_path, 'r', encoding='utf-8') as f: #lemos o arquivo
                    conteudo = f.read()
                    if file.endswith('py'):
                        dependencies = re.findall(r'^import\s+([\w.]+)|^from\s+([\w.]+)\s+import\s+([\w.]+)', conteudo, re.MULTILINE) #Lê as dependencias de arquivos python
                        formatted_dependencies = []
                        for dep in dependencies:
                            if dep[0]:  # import statement
                                if dep[0].startswith('open_spiel'):
                                    formatted_dependencies.append(dep[0].replace(".", "/") + ".py")
                            elif dep[1] and dep[2]:  # from ... import ... statement
                                if dep[1].startswith('open_spiel'):
                                    formatted_dependencies.append(f"{dep[1]}.{dep[2]}".replace(".", "/") + ".py")
                        file_data['dependencias'] = formatted_dependencies
                    elif file.endswith('.cc') or file.endswith('.cpp') or file.endswith('.h'):
                        dependencies = re.findall(r'^\s*#include\s+<([\w/.]+)>|^#include\s+"([\w/.]+)"', conteudo, re.MULTILINE) #Lê as dependências de arquivos c++
                        file_data['dependencias'] = [imp for imp in sum(dependencies, ()) if imp]
                dir_data.append(file_data)

    return dir_data

def salvar_json(dir_data, json_file):
    with open(json_file, 'w') as f: #escrevemos no arquivo json
        json.dump(dir_data, f, indent=4)

if __name__ == "__main__":
    path = "" #caminho para o diretório
    json_file = "teste.json" #caminho para o arquivo json a ser salvo

    dir_data = dir_parsing(path)
    salvar_json(dir_data, json_file)
        
