from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class TestAPI(APIView):
    def get(self, request):
        data = {
            'message': 'Data from the backend',
        }
        return Response(data=data, status=status.HTTP_200_OK)
