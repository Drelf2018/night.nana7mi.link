import os
import sys
os.system('cnpm run build')
with open('.\\dist\\index.html', 'r', encoding='utf-8') as fp:
    content = fp.read()
    content = content.replace('/favicon', 'favicon').replace('/_assets/', '')
    with open('.\\dist\\index.html', 'w', encoding='utf-8') as f:
        f.write(content)
open('.\\dist\\CNAME', 'w', encoding='utf-8').write('night.nana7mi.link')
commit = ('"' + ' '.join(sys.argv[1:]) + '"') if len(sys.argv) > 1 else 'update'
os.system('auto.bat '+commit)
os.system('start https://github.com/Drelf2018/night.nana7mi.link/tree/gh-pages')
