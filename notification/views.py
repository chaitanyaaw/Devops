from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from django.core.mail import send_mail
from notification.models import Users
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json

@method_decorator(csrf_exempt, name='dispatch')
class NotificationOuterView(View):
    def post(self, request):
        if request.method == 'POST':
            json_data = json.loads(request.body.decode("utf-8"))
            subject = json_data["subject"]
            message = json_data["message"]
            print(subject,message)
            email_list=[]
            users=Users.objects.all()
            for user in users:
                email_list.append("{0}".format(user.email))
                send_mail(subject,message,'Chitra Patil',email_list,fail_silently=False)
            return HttpResponse("Ok")
        else:
            print("error")
            return HttpResponse("Error");
