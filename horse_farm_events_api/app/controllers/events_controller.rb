class EventsController < ApplicationController
    before_action :set_event, only: [:show, :update, :destroy]
  
    # GET /events
    def index
      @events = Event.all
  
      render json: @events
    end
  
    # GET /temperatures/1
    # def show
    #   render json: @temperature
    # end
  
    # POST /events
    def create
      @event = Event.new(event_params)
      @event.venue_id = params:[:venue_id]
  # above line need to set the venue id
      if @event.save
        render json: @event, status: :created, venue: @event
      else
        render json: @event.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /events/1
    def update
      if @event.update(event_params)
        render json: @event
      else
        render json: @event.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /temperatures/1
    def destroy
      @event.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      # def set_temperature
      #   @temperature = Temperature.find(params[:id])
      # end
  
      # Only allow a trusted parameter "white list" through.
      def event_params
        params.require(:event).permit(:date, :time, :type)
      end
  end
