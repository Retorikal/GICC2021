import gicc2021.wsgi
from dj_static import Cling

application = Cling(gicc2021.wsgi.application)